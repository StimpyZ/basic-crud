export async function getProfesores () {

    try {

        const response = await fetch('http://localhost:3000/docentes')
        const data = await response.json()

        return data.map(teacher => ({
            id: teacher.id,
            name: teacher.nombres,
            lastName: teacher.apellidos,
            address: teacher.direccion,
            email: teacher.email,
            gender: teacher.genero,
            typeId: teacher.tipo_id,
            contract: teacher.tipocontrato
        }))

    } catch (error) {

        throw new Error(error)

    }

}

export async function getProfesorById (id) {

    try {

        const response = await fetch(`http://localhost:3000/docentes/${id}`)
        const data = await response.json()

        return data

    } catch (error) {

        throw new Error(error)

    }

}

export async function addProfesor (data) {

    try {

        const response = await fetch('http://localhost:3000/docentes', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await response.json()

    } catch (error) {

        console.log(error)

    }

}

export async function updateProfesor (id, data) {

    try {

        const response = await fetch(`http://localhost:3000/docentes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await response.json()

    } catch (error) {

        console.log(error)

    }

}

export async function deleteProfesor (id) {

    try {

        const response = await fetch(`http://localhost:3000/docentes/${id}`, {
            method: 'DELETE'
        })

        await response.json()

    } catch (error) {

        console.log(error)

    }

}
