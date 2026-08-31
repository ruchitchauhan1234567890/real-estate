import React from 'react'

const ImportEmployee = () => {
    return (
        <div>
            <input
                type="file"
                accept=".xlsx,.xls"
                className="hidden"
                onChange={handleFileSelect}
            />
        </div>
    )
}

export default ImportEmployee
