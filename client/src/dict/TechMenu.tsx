import React, { useEffect, useState } from 'react'
import { isTemplateLiteralTypeSpan } from 'typescript'
import './TechMenu.scss'
import DictReactResult from '../dict/DictReactResult'
import DictDomResult from '../dict/DictDomResult'

export type TechMenuProps = {
  count: number
  titles: string[]
  activeIndex?: number
  handleClick: (o, ...rest) => void
}

const handleClick = (e, ind, parentHandleClick) => {
  console.log(`event.target: ${e.target.id}`)
  const clickedId = document.getElementById(e.target.id)?.focus()
  parentHandleClick(ind)
}

const TechMenu = (props) => {
  const enum RenderTech {
    none = 0,
    react,
    dom,
  }
  const [activeTech, setActiveTech] = useState(RenderTech.none)

  const handleRenderTechClick = (tech: RenderTech, e) => {
    console.log('handleRenderTechClick: ', tech)
    console.log('handleRenderTechClick: ', e.target)
    console.log('handleRenderTechClick: ', e.target.value)
    console.log('handleRenderTechClick: ', e.target.id)
    setActiveTech(tech)
  }

  return (
    <>
      <h2>Choose technology to render dictionary results for {props.word}</h2>
      <div className="techmenu-choices">
        <button
          id="idreact"
          className="techmenu-choices__choice"
          onClick={(e) => {
            handleRenderTechClick(RenderTech.react, e)
          }}
        >
           React
        </button>
        <button
          id="iddom"
          className="techmenu-choices__choice"
          onClick={(e) => {
            handleRenderTechClick(RenderTech.dom, e)
          }}
        >
          DOM API
        </button>
      </div>
      {activeTech === RenderTech.none && <p></p>}
      {activeTech === RenderTech.react && <DictReactResult word={props.word} />}
      {activeTech === RenderTech.dom && <DictDomResult word={props.word} />}
    </>
  )
}

export default TechMenu
