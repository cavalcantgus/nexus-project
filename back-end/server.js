import fastify from "fastify"
import fastifyCors from "@fastify/cors"
import fastifyFormbody from "@fastify/formbody"

const app = fastify()
app.register(fastifyCors)
app.register(fastifyFormbody)

app.listen({port: 3000}, (err, address) => {
    if(err) {
        app.log(err)
        console.log('Erro ocasionado')
        process.exit(1)
    }
    console.log('Server listening on port 3000')
})