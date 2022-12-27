import { RegisteredUser } from "./registeredUsers.type"
export interface Events {
  card_tags?: string[],
  cover_picture?: string,
  currency?: string,
  end_time?: number,
  event_category?: string,
  event_start_time?: number,
  event_end_time?: number,
  event_subcategory?: string,
  fees?: number,
  has_started?: boolean,
  highlight_event?: boolean,
  id?: number,
  is_college_specific?: boolean,
  mobile_cover_picture?: string,
  name?: string,
  orderable_key?: string,
  registration_start_time?: number,
  registration_end_time?: number,
  registration_status?: string,
  seats_filled?: number,
  seats_left?: number,
  short_desc?: string,
  registered_users?: RegisteredUser,
  slug?: string,
  start_time?: number,
  user_already_registered?: string,
  venue?: string

}

// registered_users
