
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
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import * as userIcon from '../../images/header-icons/account-icon-blue.svg';
import './Dashboard.less';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      admins: [
        {
          name: 'Anthony Richards',
          email: 'arichards@vestri.com',
        }, {
          name: 'Anthony Kiedis',
          email: 'anthony@rhcp.com',
        },
      ],
      defaultBillingAddress: {
        name: 'Inez Larson',
        address: '198 Bendar Knoll',
        city: 'East Nicklaus',
        state: 'Michigan',
        zip: '48002',
        country: 'United States',
      },
      defaultShippingAddress: {
        name: 'Max Wilkerson',
        address: '198 Bendar Knoll',
        city: 'East Nicklaus',
        state: 'Michigan',
        zip: '48002',
        country: 'United States',
      },
      recentOrders: [
        {
          orderId: '170-05-3731',
          date: '03 May 2019',
          shipTo: 'Max Wilkerson',
          orderTotal: '$4628.77',
          status: 'Complete',
        },
        {
          orderId: '170-05-3730',
          date: '01 May 2019',
          shipTo: 'Max Wilkerson',
          orderTotal: '$4308.32',
          status: 'Complete',
        },
        {
          orderId: '170-05-3729',
          date: '27 Apr 2019',
          shipTo: 'Max Wilkerson',
          orderTotal: '$3182.27',
          status: 'Processing',
        },
        {
          orderId: '170-05-3728',
          date: '26 Apr 2019',
          shipTo: 'Christopher Bryan',
          orderTotal: '$2934.03',
          status: 'Processing',
        },
      ],
      accounts: [
        {
          name: 'Vestri',
          externalId: '170-05-3731',
          status: 'enabled',
        },
        {
          name: 'Techcub',
          externalId: '170-05-3732',
          status: 'enabled',
        },
        {
          name: 'Innovate.ly',
          externalId: '170-05-3735',
          status: 'disabled',
        },
        {
          name: 'Smartch',
          externalId: '170-05-3738',
          status: 'enabled',
        },
      ],
    };
  }

  render() {
    const {
      admins,
      defaultBillingAddress,
      defaultShippingAddress,
      recentOrders,
      accounts,
    } = this.state;

    return (
      <div className="dashboard-component">
        <div className="admin-address-book">
          <div className="b2b-section section-1 admin-section">
            <div className="section-header">
              <div className="section-title">{intl.get('admins')}</div>
            </div>
            <div className="section-content">
              {admins.map(admin => (
                <div key={admin.email} className="user-info">
                  <div className="user-icon">
                    <img src={userIcon} alt="" />
                  </div>
                  <div className="user-details">
                    <div className="user-email">{admin.email}</div>
                    <div className="user-name">{admin.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="b2b-section section-2 address-book-section">
            <div className="section-header">
              <div className="section-title">{intl.get('addresses')}</div>
              <div className="section-header-right">
                <Link to="/">{intl.get('edit')}</Link>
              </div>
            </div>
            <div className="section-content">
              <div className="address default-billing">
                <div className="address-title">{intl.get('default-billing')}</div>
                <div className="address-content">
                  <div className="name-line">{defaultBillingAddress.name}</div>
                  <div className="address-line">{defaultBillingAddress.address}</div>
                  <div className="state-line">
                    {defaultBillingAddress.city}
                    ,&nbsp;
                    {defaultBillingAddress.state}
                    ,&nbsp;
                    {defaultBillingAddress.zip}
                  </div>
                  <div className="country-line">{defaultBillingAddress.country}</div>
                </div>
              </div>
              <div className="address default-shipping">
                <div className="address-title">{intl.get('default-shipping')}</div>
                <div className="address-content">
                  <div className="name-line">{defaultShippingAddress.name}</div>
                  <div className="address-line">{defaultShippingAddress.address}</div>
                  <div className="state-line">
                    {defaultShippingAddress.city}
                    ,&nbsp;
                    {defaultShippingAddress.state}
                    ,&nbsp;
                    {defaultShippingAddress.zip}
                  </div>
                  <div className="country-line">{defaultShippingAddress.country}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="b2b-section recent-orders">
          <div className="section-header">
            <div className="section-title">{intl.get('recent-orders')}</div>
            <div className="section-header-right">
              <Link to="/">{intl.get('view-all')}</Link>
            </div>
          </div>
          <div className="section-content">
            <table className="b2b-table recent-orders-table">
              <thead>
                <tr>
                  <th className="order-id">{intl.get('order')}</th>
                  <th className="date">{intl.get('date')}</th>
                  <th className="ship-to">{intl.get('ship-to')}</th>
                  <th className="order-total">{intl.get('order-total')}</th>
                  <th className="status">{intl.get('status')}</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.orderId}>
                    <td className="order-id">{order.orderId}</td>
                    <td className="date">{order.date}</td>
                    <td className="ship-to">{order.shipTo}</td>
                    <td className="order-total">{order.orderTotal}</td>
                    <td className="status">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="b2b-section accounts">
          <div className="section-header">
            <div className="section-title">{intl.get('accounts')}</div>
            <div className="section-header-right">
              <Link to="/">{intl.get('view-all')}</Link>
            </div>
          </div>
          <div className="section-content">
            <table className="b2b-table accounts-table">
              <thead>
                <tr>
                  <th className="name">{intl.get('name')}</th>
                  <th className="external-id">{intl.get('external-id')}</th>
                  <th className="status">{intl.get('status')}</th>
                  <th className="arrow" />
                </tr>
              </thead>
              <tbody>
                {accounts.map(account => (
                  <tr key={account.externalId}>
                    <td className="name">{account.name}</td>
                    <td className="external-id">{account.externalId}</td>
                    <td className="status">{intl.get(account.status)}</td>
                    <td className="arrow" />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
