/**
 * Copyright © 2018 Elastic Path Software Inc. All rights reserved.
 *
 * This is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this license. If not, see
 *
 *     https://www.gnu.org/licenses/
 *
 *
 */

import React from 'react';
import { withRouter } from 'react-router';
import intl from 'react-intl-universal';
import PropTypes from 'prop-types';
import ProductListItemMain from './productlistitem.main';

import './bundleconstituents.main.less';

class BundleConstituentsDisplayMain extends React.Component {
  static propTypes = {
    productData: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  static renderProductAssocitationView(product) {
    const data = [];
    product.forEach((element) => {
      data.push(
        <div className="category-item-container card" key={`_${Math.random().toString(36).substr(2, 9)}`}>
          <ProductListItemMain productElement={element._standaloneitem[0]} />
        </div>,
      );
    });
    return data;
  }

  render() {
    const data = [];
    const { productData } = this.props;
    if (productData._definition[0]._components) {
      const product = productData._definition[0]._components[0]._element;
      if (product && product.length > 0) {
        const htmlFor = 'Recommendations';
        data.push(
          <div className="display" key={htmlFor}>
            <label className="control-label" htmlFor={htmlFor}>
              {intl.get('product-bundle-constituents')}
            </label>
            <div className="card-deck">
              {BundleConstituentsDisplayMain.renderProductAssocitationView(product)}
            </div>
          </div>,
        );
      }
    }
    return (
      <div className="product-recomentations-component" data-region="categoryBrowseRegion" key="categoryBrowseRegion">
        {data.length > 0 ? <hr /> : ''}
        {data}
      </div>
    );
  }
}

export default withRouter(BundleConstituentsDisplayMain);
