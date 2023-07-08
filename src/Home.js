import React, { useState, useEffect } from 'react';

import {Link} from 'react-router-dom';

function Home(){
    return (
        <div>
           <Link to ="/admin">Admin</Link> 
           <Link to ="/customer">Customer</Link>
        </div>
    )

}

export default Home;