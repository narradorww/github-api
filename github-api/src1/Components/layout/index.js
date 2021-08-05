import React from 'react';
import * as S from "./styled"

function Layout({children}) {
return(

<S.WraperLayout>
    <header>Header</header>
    {children}
</S.WraperLayout>

)

}

export default Layout;