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
import { init } from './utils/ConfigProvider';
import ProductDisplayItemMain from './components/productdisplayitem.main';
import ProductListMain from './components/productlist.main';
import ProductListItemMain from './components/productlistitem.main';
import ProductRecommendationsDisplayMain from './components/productrecommendations.main';
import BundleConstituentsDisplayMain from './components/bundleconstituents.main';
import CategoryItemsMain from './components/categoryitems.main';
import ProfileAddressesMain from './components/profileaddresses.main';
import ProfileemailinfoMain from './components/profileemailinfo.main';
import ProfileInfoMain from './components/profileInfo.main';
import ProfilePaymentMethodsMain from './components/profilepaymentmethods.main';
import OrderHistoryMain from './components/orderhistory.main';

export default { init };

export {
  init,
  ProductDisplayItemMain,
  ProductListMain,
  ProductListItemMain,
  ProductRecommendationsDisplayMain,
  BundleConstituentsDisplayMain,
  CategoryItemsMain,
  ProfileAddressesMain,
  ProfileemailinfoMain,
  ProfileInfoMain,
  ProfilePaymentMethodsMain,
  OrderHistoryMain,
};
