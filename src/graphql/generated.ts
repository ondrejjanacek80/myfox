import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type Calendar = {
  __typename?: 'Calendar';
  capacity?: Maybe<Scalars['Int']['output']>;
  carts?: Maybe<Array<Cart>>;
  id: Scalars['String']['output'];
  isOnlineReservation?: Maybe<Scalars['Boolean']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<Shop>;
  state: CalendarState;
  subject?: Maybe<Subject>;
};

export type CalendarOrderByInput = {
  billNumber?: InputMaybe<OrderByArg>;
  capacity?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  eventType?: InputMaybe<OrderByArg>;
  from?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  note?: InputMaybe<OrderByArg>;
  paidAt?: InputMaybe<OrderByArg>;
  payType?: InputMaybe<OrderByArg>;
  state?: InputMaybe<OrderByArg>;
  to?: InputMaybe<OrderByArg>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export enum CalendarState {
  Canceled = 'Canceled',
  Open = 'Open',
  Paid = 'Paid',
  Storno = 'Storno',
  Test = 'Test'
}

export type CalendarStateEnumFilter = {
  equals?: InputMaybe<CalendarState>;
  in?: InputMaybe<Array<CalendarState>>;
  not?: InputMaybe<CalendarStateEnumFilter>;
  notIn?: InputMaybe<Array<CalendarState>>;
};

export type CalendarWhereInput = {
  id?: InputMaybe<StringFilter>;
  state?: InputMaybe<CalendarStateEnumFilter>;
};

export type Cart = {
  __typename?: 'Cart';
  count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  item?: Maybe<Item>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  priceVat: Scalars['Float']['output'];
  vat: Scalars['Float']['output'];
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<File>;
  surname?: Maybe<Scalars['String']['output']>;
};

export type CustomerWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

export type Item = {
  __typename?: 'Item';
  code?: Maybe<Scalars['String']['output']>;
  color: Scalars['String']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  manufacturer?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  ord?: Maybe<Scalars['Int']['output']>;
  pauseAfter?: Maybe<Scalars['Int']['output']>;
  pauseBefore?: Maybe<Scalars['Int']['output']>;
  picture?: Maybe<File>;
  price?: Maybe<Scalars['Float']['output']>;
  priceVat?: Maybe<Scalars['Float']['output']>;
  stockEnabled?: Maybe<Scalars['Boolean']['output']>;
  warranty?: Maybe<Scalars['String']['output']>;
};

export enum OrderByArg {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  __typename?: 'Query';
  getCustomer?: Maybe<Customer>;
  listCalendars: Array<Maybe<Calendar>>;
};


export type QueryGetCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type QueryListCalendarsArgs = {
  orderBy?: InputMaybe<CalendarOrderByInput>;
  where?: InputMaybe<CalendarWhereInput>;
};

export type Shop = {
  __typename?: 'Shop';
  address?: Maybe<Address>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  mode?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subject = {
  __typename?: 'Subject';
  alias: Scalars['String']['output'];
  dic?: Maybe<Scalars['String']['output']>;
  ico?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  marketingName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  vatPayer?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerQueryVariables = Exact<{
  where: CustomerWhereUniqueInput;
}>;


export type GetCustomerQuery = { __typename?: 'Query', getCustomer?: { __typename?: 'Customer', id: string, name?: string | null, surname?: string | null, phone?: string | null, email?: string | null, address?: string | null, picture?: { __typename?: 'File', id: string, secret: string } | null } | null };

export type ListCalendarsQueryVariables = Exact<{
  where?: InputMaybe<CalendarWhereInput>;
  orderBy?: InputMaybe<CalendarOrderByInput>;
}>;


export type ListCalendarsQuery = { __typename?: 'Query', listCalendars: Array<{ __typename?: 'Calendar', id: string, state: CalendarState, shop?: { __typename?: 'Shop', id: string, name: string, email?: string | null, phone?: string | null, address?: { __typename?: 'Address', street?: string | null, city?: string | null, zip?: string | null } | null } | null, subject?: { __typename?: 'Subject', id: string, alias: string } | null } | null> };


export const GetCustomerDocument = gql`
    query getCustomer($where: CustomerWhereUniqueInput!) {
  getCustomer(where: $where) {
    id
    name
    surname
    phone
    email
    address
    picture {
      id
      secret
    }
  }
}
    `;

/**
 * __useGetCustomerQuery__
 *
 * To run a query within a React component, call `useGetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetCustomerQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables> & ({ variables: GetCustomerQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
      }
export function useGetCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
        }
// @ts-ignore
export function useGetCustomerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>): Apollo.UseSuspenseQueryResult<GetCustomerQuery, GetCustomerQueryVariables>;
export function useGetCustomerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>): Apollo.UseSuspenseQueryResult<GetCustomerQuery | undefined, GetCustomerQueryVariables>;
export function useGetCustomerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
        }
export type GetCustomerQueryHookResult = ReturnType<typeof useGetCustomerQuery>;
export type GetCustomerLazyQueryHookResult = ReturnType<typeof useGetCustomerLazyQuery>;
export type GetCustomerSuspenseQueryHookResult = ReturnType<typeof useGetCustomerSuspenseQuery>;
export type GetCustomerQueryResult = Apollo.QueryResult<GetCustomerQuery, GetCustomerQueryVariables>;
export const ListCalendarsDocument = gql`
    query listCalendars($where: CalendarWhereInput, $orderBy: CalendarOrderByInput) {
  listCalendars(where: $where, orderBy: $orderBy) {
    id
    shop {
      id
      name
      address {
        street
        city
        zip
      }
      email
      phone
    }
    subject {
      id
      alias
    }
    state
  }
}
    `;

/**
 * __useListCalendarsQuery__
 *
 * To run a query within a React component, call `useListCalendarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCalendarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCalendarsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useListCalendarsQuery(baseOptions?: Apollo.QueryHookOptions<ListCalendarsQuery, ListCalendarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCalendarsQuery, ListCalendarsQueryVariables>(ListCalendarsDocument, options);
      }
export function useListCalendarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCalendarsQuery, ListCalendarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCalendarsQuery, ListCalendarsQueryVariables>(ListCalendarsDocument, options);
        }
// @ts-ignore
export function useListCalendarsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListCalendarsQuery, ListCalendarsQueryVariables>): Apollo.UseSuspenseQueryResult<ListCalendarsQuery, ListCalendarsQueryVariables>;
export function useListCalendarsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListCalendarsQuery, ListCalendarsQueryVariables>): Apollo.UseSuspenseQueryResult<ListCalendarsQuery | undefined, ListCalendarsQueryVariables>;
export function useListCalendarsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListCalendarsQuery, ListCalendarsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListCalendarsQuery, ListCalendarsQueryVariables>(ListCalendarsDocument, options);
        }
export type ListCalendarsQueryHookResult = ReturnType<typeof useListCalendarsQuery>;
export type ListCalendarsLazyQueryHookResult = ReturnType<typeof useListCalendarsLazyQuery>;
export type ListCalendarsSuspenseQueryHookResult = ReturnType<typeof useListCalendarsSuspenseQuery>;
export type ListCalendarsQueryResult = Apollo.QueryResult<ListCalendarsQuery, ListCalendarsQueryVariables>;