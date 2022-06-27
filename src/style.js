import styled from "styled-components";

export const Flexed = styled.div`
    display:flex;
    justify-content: center;
`;

export const OverviewStyle = styled.div`
    margin: 4rem 0;
    .head{
        margin: 2rem 0;
        width: fit-content;
        div{
            height:.5rem;
            width: 50%;
            background-color:#0950CD;
        }
    }
    .overview-text{
        display:flex;
        flex-wrap:wrap;
        gap:1rem;
        p{
            font-size: 1.2rem;
        }
        .box-images{
            width: 45%;
            img{
                width: 100%;
            }
        }
        .texts{
            display: flex;
            align-items: center;
            margin-right: 3rem;
            width: 50%;
        }
    }
    
    @media (max-width: 1040px){
        .overview-text{
            display:block;
            flex-wrap: wrap;
            .box-images{
                width: 100%;
            }
            .texts{
                width: 100%;
            }
        }
        
    }
    @media (min-width: 1041px){
        .overview-text{
            display:flex;
            .texts{
                width: 45%;
            }
        }
    }
`;
