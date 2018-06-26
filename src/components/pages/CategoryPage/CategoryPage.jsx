/**
 * Copyright © 2018 Elastic Path Software Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AppHeaderMain from '../../ui/appheader/appheader.main.jsx';
import CategoryItemsMain from '../../ui/categoryitems/categoryitems.main.jsx';

var Config = require('Config')
// Then use in render: <span>{Config.skuImagesS3Url}</span>

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryUrl: ''
        };
        this.updateCategoryUrl = this.updateCategoryUrl.bind(this);
    }
    updateCategoryUrl(updatedUrl){
        // if from a pagination
        // this.setState({ categoryUrl: updatedUrl });
        // else 
        // this.setState({ categoryUrl: this.props.match.params.url });
    }
    render() {
        return (
            <div>
                <AppHeaderMain />
                <CategoryItemsMain callbackFromParent={this.updateCategoryUrl} categoryUrl={decodeURIComponent(this.props.match.params.url)} />
            </div>
        );
    }
}

export default CategoryPage;