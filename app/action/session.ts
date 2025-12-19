import { headers } from 'next/headers';
import { getAuth } from '@/utils/auth';

export const getSession = async () => {
    const auth = getAuth();
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return session;
}