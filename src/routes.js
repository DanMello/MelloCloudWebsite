import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from './components/home/Home'
import Notes from './components/notes/Notes'
import Contact from './components/contact/Contact'
import PdfViewer from './components/pdfViewer/PdfViewer'
import NoMatch from './components/nomatch/NoMatch'
import ReactVideoPlayerDemo from './components/react-video-player/React-video-player-demo'
import SimplerFormsVisualRepresentation from './components/react-simpler-forms/react-simpler-forms-visual-representation'

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  )
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest)
    }}/>
  )
}

class AppRoutes extends Component {

  render() {

    let config = this.props.config
    
    return (

      <Switch>

        <PropsRoute path="/" exact strict component={Home} config={config} />
        <PropsRoute path="/notes" exact strict component={Notes} config={config} />
        <PropsRoute path="/contact" component={Contact} config={config} />
        <PropsRoute path="/pdfviewer" exact strict component={PdfViewer} config={config} />
        <PropsRoute path="/react-video-player" exact strict component={ReactVideoPlayerDemo} config={config} />
        <PropsRoute path="/react-simpler-forms" exact strict component={SimplerFormsVisualRepresentation} config={config} />
        <PropsRoute component={NoMatch} config={config} />

      </Switch>
    )
  }
}

export default AppRoutes
          
          //        <Route component={Resume} path='/resume' />

        // <PropsRoute path="/notes" exact strict component={Notes} config={config} dispatch={dispatch} user={user} />
        // <PropsRoute path="/contact" component={Contact} config={config} dispatch={dispatch} user={user} form={form} dispatch={dispatch} onSubmit={contact} required={['name', 'email', 'message']} delayErrors={[{ input: 'email', time: 1400 }]} />
        // <PropsRoute path="/pdfviewer" exact strict component={PdfViewer} config={config} />
        // <PropsRoute path="/react-video-player" exact strict component={ReactVideoPlayerDemo} config={config} dispatch={dispatch} user={user} />

        // /react-simpler-forms/single-step

        // <PropsRoute component={NoMatch} config={config} dispatch={dispatch} user={user} />






//<Route component={Resume} path='/resume' />
//<Route component={Image} path='/image' />
// <PropsRoute path="/about" component={About} config={config} dispatch={dispatch} user={user} />
// <PropsRoute path="/terms" component={Terms} config={config} dispatch={dispatch} user={user} />
// <PropsRoute path="/privacy" component={Privacy} config={config} dispatch={dispatch} user={user} />

// <ProtectedPropsRoute path="/settings" exact strict component={Settings} config={config} user={user} dispatch={dispatch} />
// <ProtectedPropsRoute path="/settings/edit" exact strict component={Edit} config={config} dispatch={dispatch} form={form} user={user} onSubmit={update} queryMethod={checkEmail}/>

// <NotloggedInRoute path="/account/forgot" exact strict component={Forgot} form={form} config={config} dispatch={dispatch} required={['email']} onSubmit={forgot} delayErrors={[{ input: 'email', time: 1400 }]} user={user}/>
// <NotloggedInRoute path="/account/login" exact strict component={Login} form={form} config={config} dispatch={dispatch} required={['email', 'password']} onSubmit={login} user={user}/>
// <NotloggedInRoute path="/account/signup" exact strict component={Signup} form={form} config={config} dispatch={dispatch} user={user} />

// <NotloggedInRoute path="/account/reset/:token" exact strict component={Reset} form={form} config={config} dispatch={dispatch} user={user} required={required} onSubmit={resetPassword} delayErrors={delayErrors} matchRequired={matchRequired}/>

// <DeveloperRoute path="/videoeditor" exact strict component={VerifyUser} config={config} dispatch={dispatch} user={user} video={video}/>
// <DeveloperRoute path="/videoeditor/:projectname" exact strict component={VideoProject} config={config} dispatch={dispatch} user={user} video={video}/>
// <DeveloperRoute path="/videoeditor/:projectname/video" exact strict component={VideoPreview} config={config} dispatch={dispatch} user={user} video={video}/>