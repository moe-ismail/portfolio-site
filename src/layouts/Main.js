import React from 'react';
import { Helmet } from 'react-helmet';
import {config} from 'config';
import Navbar from '../components/Navbar'

class Main extends React.Component{
    render() {
        const { children, route } = this.props;
        const featuredProjects = get.ProjectsFromRoute(route).map(
        page => page.data
        );
        return (
            <div>
                <Helmet
                  defaultTitle={config.siteTitle}
                  titleTemplate={`%s - ${config.siteTitle}`}
                >
                <meta
                  name="description"
                  content="Hi .. I'm Moe Ismal, a full stack developer interested in all things programming"
                />
                </Helmet>
                <Navbar title={config.siteTitle} {...this.props} />
                {children}
                <Footer
                  featured={featuredProjects}
                  works={workProjects}
                  />
             </div>

        );
    }
}

export default Main