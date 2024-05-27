// import { createBrowserClient } from '@supabase/ssr';

// /**
//  * CSR용 Supabase 클라이언트를 생성하는 함수
//  *
//  * @returns {SupabaseClient} - 클라이언트 사이드 렌더링을 위한 Supabase 클라이언트
//  *
//  * @example
//  * import { createClientSideClient } from 'path/to/this/file';
//  *
//  * const supabaseClient = createClientSideClient();
//  *
//  * async function getUserData() {
//  *   const { data, error } = await supabaseClient.auth.getUser();
//  *   if (error) {
//  *     console.error('Error fetching user data:', error);
//  *   } else {
//  *     console.log('User data:', data);
//  *   }
//  * }
//  */
// export function createClientSideClient() {
//   return createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//   );
// }
