import React from 'react';

const index = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token) {
            props.history.push("/login")
        } else {
            props.history.push("/dashboard")
        }

    //eslint-disable-next-line
    }, [])
  return (
      <div>
          
      </div>
  )
}

export default index;