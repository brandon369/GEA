import React from "react";
import GifGridItem from "../../components/GifGridItem";
import {shallow} from "enzyme";

describe("Prueba en <GifGtidItem />", () => {
  const title = 'Un titulo';
  const url = '/';
  const wrapper = shallow(<GifGridItem title={title} url={url}/>)

  //Tomar un sanpchot delcomponente probar que coincida con el renderizado
  test("debe demostrar el componente correctamente", () => {

    expect(wrapper).toMatchSnapshot();

  })

  test('debede tener un párrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title)

  })

  test('debe de tener la imagen igual al  url y alt', () => {
    const img = wrapper.find('img')
    // console.log(img.html())
    // console.log(img.props().src)
    // console.log(img.prop('src'))

    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })


  test('debee de tener la clase animate__fadeInDown', () => {
    const div = wrapper.find('div')
    expect(div.prop('className').includes('animate__fadeInDown')).toBe(true)
  })
})

