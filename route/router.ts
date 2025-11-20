import express from 'express';
import { AiChat } from '../services/AIchat';
const router = express.Router()
    
router.post('/chat', async (req, res) => {
    const { message } = req.body
    if (!message) return res.status(400).json({ error: "message is required" })
    try {
        const reply = await AiChat(message)
        res.json({ reply })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal server error" })

    }
})

export default router