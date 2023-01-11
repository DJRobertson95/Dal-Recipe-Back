const { client } = require('./index')

async function createdepartment({departmentName}) {
    try {
        await client.query(`
        INSERT INTO department("departmentName")
        VALUES ($1)
        ON CONFLICT ("departmentName") DO NOTHING
        RETURNING *;
        `, [departmentName])
    } catch (error) {
        console.error(error)
    }
}
async function getAlldepartment() {
    try {
        const { rows } = await client.query(`
        SELECT *
        FROM department;
        `);
        return rows
    } catch (error) {
        console.error(error)
    }
}
async function getdepartmentById(departmentId) {
    try {
        const { rows } = await client.query(`
        SELECT *
        FROM department
        WHERE "departmentId"=$1;
        `, [departmentId])
        return rows
    } catch (error) {
        console.error(error)
    }
}
module.exports = {
    createdepartment,
    getAlldepartment,
    getdepartmentById
}

