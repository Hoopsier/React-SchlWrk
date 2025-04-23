import './App.css'
import React, { useState } from 'react'
import LoginService from './services/Auth'
import md5 from 'md5'
import { useEffect } from 'react'

const Login = ({ setLoggedInUser }) => {

        // Komponentin tilan määritys
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')


        // onSubmit tapahtumankäsittelijä funktio.
        const handleSubmit = (event) => {
                event.preventDefault()
                var userForAuth = {
                        username: username,
                        password: password
                }

                // Käytetään services/Auth.js tiedoston metodia, joka lähettää puolestaan pyynnön rajapintaan.
                LoginService.authenticate(userForAuth)
                        .then(response => {
                                if (response.status === 200) {

                                        // Talletetaan tietoja selaimen local storageen (Kehittäjien työkalut à Application välilehti)
                                        localStorage.setItem("username", response.data.username)
                                        localStorage.setItem("accesslevelId", response.data.accesslevelId)
                                        localStorage.setItem("token", response.data.token)

                                        // Asetetaan käyttäjätunnus App-komponentissa olevaan tilaan.
                                        setLoggedInUser(response.data.username)



                                        setTimeout(() => {

                                        }, 5000)

                                }
                        })
                        .catch(error => {         // Jos jotain menee pieleen…


                                setTimeout(() => {

                                }, 6000)
                        })
        }

        // Kenttien tyhjennys
        const emptyFields = () => {
                setUsername("")
                setPassword("")
        }
        
        useEffect(() => {
                let storedUser = localStorage.getItem("username")
                if (storedUser !== null) {
                        setLoggedInUser(storedUser)
                }
        }, [])
        return (
                <div id="loginWindow">
                        <h2>Login</h2>

                        <form onSubmit={handleSubmit}>
                                <div>
                                        <input type="text" value={username} placeholder="Username"
                                                onChange={({ target }) => setUsername(target.value)} />
                                </div>
                                <div>
                                        <input type="password" value={password} placeholder="Password"
                                                onChange={({ target }) => setPassword(target.value)} />
                                </div>

                                <input type='submit' value='Login' />
                                <input type='button' value='Empty' onClick={() => emptyFields()} />
                        </form>

                </div>
        )
}


export default Login