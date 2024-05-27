// import { createServerClient, type CookieOptions } from '@supabase/ssr';
// import { cookies } from 'next/headers';

// /**
//  * SSR용 Supabase 클라이언트를 생성하는 함수
//  *
//  * @returns {SupabaseClient} - 서버 사이드 렌더링을 위한 Supabase 클라이언트
//  *
//  * @example
//  * import { createServerSideClient } from 'path/to/this/file';
//  *
//  * const supabaseClient = createServerSideClient();
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
// export function createServerSideClient() {
//   const cookieStore = cookies();

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get(name: string) {
//           return cookieStore.get(name)?.value;
//         },
//         set(name: string, value: string, options: CookieOptions) {
//           try {
//             cookieStore.set({ name, value, ...options });
//           } catch (error) {
//             // `set` 메서드가 서버 컴포넌트에서 호출되었습니다.
//             // 사용자 세션을 갱신하는 미들웨어가 있는 경우 무시해도 됩니다.
//           }
//         },
//         remove(name: string, options: CookieOptions) {
//           try {
//             cookieStore.set({ name, value: '', ...options });
//           } catch (error) {
//             // `delete` 메서드가 서버 컴포넌트에서 호출되었습니다.
//             // 사용자 세션을 갱신하는 미들웨어가 있는 경우 무시해도 됩니다.
//           }
//         },
//       },
//     }
//   );
// }
