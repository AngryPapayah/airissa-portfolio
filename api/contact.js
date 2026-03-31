import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = "") {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method not allowed"});
    }

    try {
        const {name, email, message} = req.body || {};

        if (!name || !email || !message) {
            return res.status(400).json({message: "Vul alle velden in."});
        }

        const safeName = escapeHtml(name.trim());
        const safeEmail = escapeHtml(email.trim());
        const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

        const {error} = await resend.emails.send({
            from: "Portfolio <noreply@send.jouwdomein.nl>",
            to: "airissavermo@hotmail.com",
            subject: `Nieuw portfolio bericht van ${safeName}`,
            replyTo: safeEmail,
            html: `
                <h2>Nieuw contactformulier bericht</h2>
                <p><strong>Naam:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Bericht:</strong></p>
                <p>${safeMessage}</p>
            `
        });

        if (error) {
            return res.status(500).json({message: "Verzenden mislukt."});
        }

        return res.status(200).json({success: true});
    } catch (error) {
        return res.status(500).json({message: "Er ging iets mis bij het verzenden."});
    }
}