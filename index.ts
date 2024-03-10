import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const PORT = 5000

const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.post('/api', async (req, res) => {
	const { name, email } = req.body
	if (!name || !email) {
		return res.status(400).json({ message: 'Email and Name is required!' })
	}

	try {
		const createdRow = await prisma.waitList.create({
			data: {
				name,
				email
			}
		})

		res.json(createdRow)
	} catch (error) {
		res.status(400).json({ mesage: error })
	}
})

app.get('/api', async (req, res) => {
	try {
		const users = await prisma.waitList.findMany()
		res.json(users)
	} catch (error) {
		res.status(400).json({ mesage: error })
	}
})

app.listen(PORT, () => console.log(`The port ${PORT} is listening!`))
