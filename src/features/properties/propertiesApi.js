import { api } from "../api/api";

export const propertiesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProperties: builder.query({
            query: () => ({
                url: "/property/findAll",
                method: "POST",
            }),
        }),
        createProperty: builder.mutation({
            query: (body) => ({
                url: "/property/insert",
                method: "POST",
                body: body
            }),
        }),
        getPropertyTypes: builder.query({
            query: () => ({
                url: "/propertyType/findAll",
                method: "POST",
            }),
        }),
        getState: builder.query({
            query: () => ({
                url: "/stateUs/findAll",
                method: "POST",
            }),
        }),
        findAllByCity: builder.query({
            query: ({name}) => ({
                url: `/property/findAllByCity/find?city=${name}`,
                method: "POST",
            })
        }),
        getFeaturesbyCity: builder.query({
            query: () => ({
                url: `/property/findAllByCity/getFeatures`,
                method: "POST",
            }),
        }),
    }),
});

export const { useGetPropertiesQuery, useCreatePropertyMutation , useGetPropertyTypesQuery, useGetStateQuery, useFindAllByCityQuery, useGetFeaturesbyCityQuery } = propertiesApi;
