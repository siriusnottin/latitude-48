// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/about`
  | `/contact`
  | `/events`
  | `/menu`
  | `/menu/argentina`
  | `/menu/brasil`
  | `/menu/chili`
  | `/menu/coffees/brasil`
  | `/menu/coffees/italian`
  | `/menu/ethiopia`
  | `/menu/food/cookies`
  | `/menu/italian`
  | `/merch`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
