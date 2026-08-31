import React from 'react'

const lead = JSON.parse(localStorage.getItem("leads"))

const AddTask = () => {
  return (
    <div>
        <div>
            <form>
                <div>
                    <div>
                        <label>Title</label>
                        <input type="text" placeholder="enter task title"/>
                    </div>

                    <div>
                        <label>Description</label>
                        <input type="text" placeholder='enter task description' />
                    </div>

                    <div>
                        <label>Lead</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTask
