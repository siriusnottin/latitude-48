// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client';

export type Path =
  | `/`
  | `/about`
  | `/contact`
  | `/events`
  | `/menu`
  | `/menu/coffees`
  | `/menu/coffees/argentina`
  | `/menu/coffees/brasil`
  | `/menu/coffees/chili`
  | `/menu/coffees/colombia`
  | `/menu/coffees/costa-rica`
  | `/menu/coffees/ethiopia`
  | `/menu/coffees/guatemala`
  | `/menu/coffees/indonesia`
  | `/menu/coffees/italian`
  | `/menu/coffees/jamaica`
  | `/menu/coffees/kenya`
  | `/menu/cold-drinks`
  | `/menu/food`
  | `/menu/food/cookies`
  | `/menu/tea`
  | `/merch`;

export type Params = {};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>();
export const { redirect } = utils<Path, Params>();
