import React from 'react'
import '../../../public/styles.css'

function ListOfUsers() {
    return (
        <div className='whole-listofusers-div'>
        <h1 className='user-title'>Your team!</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Business</th>
                    <th>Income</th>
                </tr>
                <tr>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                </tr>
            </table>
        </div>
    )
}

export default ListOfUsers
