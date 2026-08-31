import React from 'react'

const ImportEmployee = ({ ref }) => {
    const handleFileSelect = () => {

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
