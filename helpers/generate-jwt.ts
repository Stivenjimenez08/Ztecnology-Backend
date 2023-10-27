import jwt from 'jsonwebtoken'

//funcion que me dice que si el id trae un valor me genera el JWT sino lo deja vacio
const generateJWT = (id=' ')=>{

    return new Promise((resolve, reject)=>{

        const payload = {id};

        jwt.sign(payload, process.env.PRIVATEKEY || ' ', {

            expiresIn: "1h"
        },(err, token)=>{

            if(err){
                console.log(err)
                reject('No se pudo generar el token')
            }else{
                resolve(token)
            }
        })
    })
    
}

export default generateJWT