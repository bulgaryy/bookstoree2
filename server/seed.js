import express from 'express'
import bcrypt from 'bcrypt'
import { Admin } from './models/Admin.js'
import './db.js'

async function AdminAccount() {
    try {
        const adminCOunt = await Admin.countDocuments()
        if(adminCOunt === 0) {
            const hashPassword = await bcrypt.hash('adminpassword', 10)
            const newAdmin = new Admin ({
                username: 'admin',
                password: hashPassword
            })
           await newAdmin.save()
           console.log("Account Created")
        } else {
            console.log("Account Already existed")
        }
    } catch (err) {
        console.log("Error")
    }
}

AdminAccount()