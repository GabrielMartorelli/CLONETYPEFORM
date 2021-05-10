import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
.frist {
    background:#ff0000;
    overflow: hidden;
    .offset{
width:100%;
height:100%;
    }
    .a{
background: #f5f1ea;
height: 100%;
display: flex;
align-items: flex-end;

.left-side{
    width: 50%;
    height: 100%; 
    background: #7dbb91;
}
.rigth-side{
    width: 50%;
    height: 100%;

    .rigth-image{
        background: #7dbb91;
        height: 100%;
        width: 100%;
    }
}
    }
    .b{
background: #582534;
width: 100%;
height: 100%;
    }
    .c{
background: #0a7397;
width: 100%;
height: 100%;
    }
}
.second {
background: #008000;
}
.third {
    background: #ffff00;
}
.fourth {
    background: #0000ff;
}`

export const Section = styled.div`
position : relative
`;
export const Sticky = styled(motion.div)`
height: 100vh;
position: sticky;
top: 0;
left: 0;
right: 0;
`;