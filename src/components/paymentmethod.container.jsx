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
import PropTypes from 'prop-types';

const PaymentMethodContainer = (props) => {
  const { displayName } = props;
  const displayAppliedAmount = (displayName['applied-amount-display']) ? (` - ${displayName['applied-amount-display'] || ''}`) : '';
  const displayTransactionType = (displayName['transaction-type']) ? (` - ${displayName['transaction-type'] || ''}`) : '';

  let displayNameVar = displayName['display-value'] || displayName['display-name'];
  if (!displayNameVar) {
    displayNameVar = `${displayName.provider.toLowerCase().replace(/_/g, ' ')}`;
  }

  return (
    <p className="payment-method-container">
      {displayNameVar}
      {displayAppliedAmount}
      {displayTransactionType}
    </p>
  );
};

PaymentMethodContainer.propTypes = {
  displayName: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PaymentMethodContainer;
