import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import { PostsView } from 'views/PostsView/index'

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<PostsView {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<PostsView {...props} />)
}

describe('(View) Home', function () {
  let _component, _rendered, _props, _spies

  beforeEach(function () {
    _spies = {}
    _props = {
      counter: 0,
      ...bindActionCreators({
        doubleAsync: (_spies.doubleAsync = sinon.spy()),
        increment: (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }

    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  xit('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  xit('Should include an <h1> with welcome text.', function () {
    const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1')

    expect(h1).to.exist
    expect(h1.textContent).to.match(/Welcome to the React Redux Starter Kit/)
  })

  xit('Should render with an <h2> that includes Sample Counter text.', function () {
    const h2 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h2')

    expect(h2).to.exist
    expect(h2.textContent).to.match(/Sample Counter/)
  })

  xit('Should render props.counter at the end of the sample counter <h2>.', function () {
    const h2 = TestUtils.findRenderedDOMComponentWithTag(
      renderWithProps({ ..._props, counter: 5 }), 'h2'
    )

    expect(h2).to.exist
    expect(h2.textContent).to.match(/5$/)
  })

  describe('An increment button...', function () {
    let _btn

    beforeEach(() => {
      _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
        .filter(a => /Increment/.test(a.textContent))[0]
    })

    xit('should be rendered.', function () {
      expect(_btn).to.exist
    })

    xit('should dispatch an action when clicked.', function () {
      _spies.dispatch.should.have.not.been.called
      TestUtils.Simulate.click(_btn)
      _spies.dispatch.should.have.been.called
    })
  })

  describe('A Double (Async) button...', function () {
    let _btn

    beforeEach(() => {
      _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
        .filter(a => /Double/.test(a.textContent))[0]
    })

    xit('should be rendered.', function () {
      expect(_btn).to.exist
    })

    xit('should dispatch an action when clicked.', function () {
      _spies.dispatch.should.have.not.been.called
      TestUtils.Simulate.click(_btn)
      _spies.dispatch.should.have.been.called
    })
  })
})
