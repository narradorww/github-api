import React from 'react';
import * as S from './styled'


const Profile = () => {
return (
    <>
    <S.Wrapper>
                <S.WrapperImage src="https://avatars.githubusercontent.com/u/78651469?v=4"
                                alt= "Avatar do Usuário"/>
                <S.WrapperInfoUser>

                          
                    <div>
                    <h1>Rodrigo Alexandre</h1> 

                                    
                                    <S.WrapperUserName>
                                        
                                        <h3>Username: </h3>
                                        <a href="https://github.com/narradorww"
                                        target="_blank"
                                        rel="noreferrer">
                                        narradorww</a>
                                    
                                    </S.WrapperUserName>
                                
                    </div>
                              
                            
                                    <S.WrapperStatusCount>    
                                <div> 
                                <h4> Followers </h4>
                                <span> 5</span>
                                </div>

                                <div> 
                                <h4>Starreds </h4>
                                <span> 5</span>
                                </div>

                                <div> 
                                <h4>Followings </h4>
                                <span> 5</span>
                                </div>
                            </S.WrapperStatusCount>
                </S.WrapperInfoUser>
                
  </S.Wrapper>
   
    </>
)
       




};

export default Profile;