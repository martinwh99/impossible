/**
 * Created by martin on 25.02.2016.
 */

import {Mongo} from 'meteor/mongo';

export const Items = new Mongo.Collection('items');
export const Categories = new Mongo.Collection('categories');