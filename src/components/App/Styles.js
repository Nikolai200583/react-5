import styled, { css } from 'styled-components';
const titleCol = css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`;

export const wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
`;
export const container = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: ${(props) => props.theme.body};
`;

export const main = styled.main`
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const mainNav = styled.nav`
    width: 244px;
    background-color: ${(props) => props.theme.body};
    padding: 20px 0 20px 36px;
`;
export const mainCenterblock = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;
export const centerblockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid #4e4e4e;
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const searchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: ${(props) => props.theme.strokeIcon};
    fill: transparent;
`;
export const searchText = styled.input`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.title};
    ::placeholder {
        background-color: transparent;
        color: ${(props) => props.theme.title};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`;
export const centerblockH2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
    color: ${(props) => props.theme.title};
`;
export const centerblockContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
export const contentTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`;
export const col01 = styled.div`
    ${titleCol};
    width: 447px;
`;
export const col02 = styled.div`
    ${titleCol};
    width: 321px;
`;
export const col03 = styled.div`
    ${titleCol};
    width: 245px;
`;
export const col04 = styled.div`
    ${titleCol};
    width: 60px;
    text-align: end;
`;
export const playlistTitleSvg = styled.svg`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;
export const contentPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
`;
export const mainSidebar = styled.div`
    max-width: 418px;
    padding: 20px 90px 20px 78px;
`;
export const sidebarPersonal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 0 15px 0;
`;
export const sidebarPersonalName = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    margin-right: 16px;
`;
export const sidebarBlock = styled.div`
    height: 100%;
    padding: 240px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
export const sidebarAvatar = styled.svg`
    width: 43px;
    height: 43px;
    border-radius: 50%;
`;
export const sidebarExit = styled.svg`
    width: 40px;
    height: 40px;
    fill: transparent;    
    cursor: pointer;
`;
export const sidebarList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${(props) => props.theme.barBack};
`;

export const footer = styled.footer``;
