import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

 export type Launch = {
  id: string;
  date_utc: string;
  name: string;
  rocket: string;
  success: boolean;
  launchpad: string;
  details: string;
};

export type Rocket = {
  id: string;
  name: string;
  description: string;
}
export const rocketApi = createApi({
  reducerPath: 'rocketApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4'}),
  endpoints: (builder) => ({
    getLaunches: builder.query<Launch[], void>({
      query: () => 'launches',
    }),
    getRockets: builder.query<Rocket[], void>({
      query: () => 'rockets',
    })
  }),
});

export const { useGetLaunchesQuery, useGetRocketsQuery } = rocketApi;
