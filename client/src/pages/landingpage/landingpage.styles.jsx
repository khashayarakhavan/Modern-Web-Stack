import styled from 'styled-components';

export const LandingPageContainer = styled.div`
         
         display: grid;
         grid-template-rows: 80vh min-content min-content 40rem repeat(
             3,
             min-content
           );
         grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] minmax(
             6rem,
             1fr
           ) [center-start] repeat(
             8,
             [col-start] minmax(min-content, 12rem) [col-end]
           ) [center-end] minmax(6rem, 1fr) [full-end];
         
       `;

export const Main = styled.div`
         grid-column: center-start / center-end;
         display: flex;
         
         justify-content: center;
         align-items: center;
         flex-direction: column;

         h1 {
           color: red;
         }
       `;
