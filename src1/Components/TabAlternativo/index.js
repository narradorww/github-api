import React from 'react';
import RepositoryItem from './../repository-item/index';
import * as S from './styled';

const Tabulacao =()=> {
    return(
    <S.WrapperTabula>        
<div>
<RepositoryItem 
name= "AppCellep"
linktoRepo = "https://github.com/narradorww/AppCellep"
fullName= "narrador/AppCellep"/>

</div>
<div>

<RepositoryItem
name= "CloneInsta"
linktoRepo = "https://github.com/narradorww/CloneInsta"
fullName= "narradorww/CloneInsta"/>


</div>
</S.WrapperTabula>

    )
    
}

export default Tabulacao;
