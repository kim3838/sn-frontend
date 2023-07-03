import Vue from 'vue';

import capitalize from 'lodash/capitalize';
import isNull from "lodash/isNull";
import get from "lodash/get";

Object.defineProperty(Vue.prototype, '$_capitalize', {value: capitalize});
Object.defineProperty(Vue.prototype, '$_isNull', {value: isNull});
Object.defineProperty(Vue.prototype, '$_get', {value: get});
