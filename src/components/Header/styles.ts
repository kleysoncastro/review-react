import styled from "styled-components";

export const Container = styled.header`

background: var(--blue);

`
export const Content = styled.div`

max-width: 1120px;
margin: 0 auto;
padding: 2rem 1rem 10rem;
display: flex;
align-items: center;
justify-content: space-between;


button {
    background: var(--blue-light);
    color: #ffff;
    font-size: 1rem;
    border: 0;
    padding: 0 2rem;
    border-radius: 2.25rem;

    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.9)
    }
    
}

`