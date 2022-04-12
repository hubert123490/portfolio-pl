/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(46,46,73,1) 49%, rgba(2,0,36,1) 100%, rgba(121,9,120,1) 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="star" width={6} color="icon_brightest" left="85%" top="75%" />
        <Svg icon="star" width={8} color="icon_teal" left="70%" top="20%" />
        <Svg icon="star" width={8} stroke color="icon_orange" left="25%" top="5%" />
        <Svg icon="star" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="star" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <Svg icon="star" width={12} stroke color="icon_brightest" left="90%" top="30%" />
        <Svg icon="star" width={16} color="icon_yellow" left="70%" top="90%" />
        <Svg icon="star" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
        <Svg icon="star" width={6} color="icon_brightest" left="75%" top="10%" />
        <Svg icon="star" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="star" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="star" width={12} color="icon_pink" left="80%" top="60%" />
      <Svg icon="star" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="star" width={12} color="icon_yellow" left="29%" top="26%" />
      <Svg icon="star" width={16} stroke color="icon_red" left="75%" top="30%" />
      <Svg icon="star" width={8} stroke color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Projects
