import React from 'react'

const ImportEmployee = ({ ref }) => {
    const handleFileSelect = (e) => {
        const file = e.target.files[0]

        console.log(file)
    }

    return (
        <div>
            <input
                ref={ref}
                type="file"
                accept=".xlsx,.xls"
                className="hidden"
                onChange={handleFileSelect}
            />
        </div>
    )
}

export default ImportEmployee
