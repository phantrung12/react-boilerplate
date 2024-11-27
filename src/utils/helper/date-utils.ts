import dayjs, { Dayjs } from 'dayjs';
import { DMY, DMYHm, DMYHms, HHmm, YMD, YMDHm, YMDHms } from '~/utils/constant/constant';

export const convertDateYMD = (date: any) => (date ? dayjs(date).format(YMD) : null);
export const convertDateYMDHms = (date: any) => (date ? dayjs(date).format(YMDHms) : null);
export const convertDateYMDHm = (date: any) => (date ? dayjs(date).format(YMDHm) : null);

export const convertDateDMY = (date: any) => (date ? dayjs(date).format(DMY) : null);
export const convertDateDMYHms = (date: any) => (date ? dayjs(date).format(DMYHms) : null);
export const convertDateDMYHm = (date: any) => (date ? dayjs(date).format(DMYHm) : null);
export const convertDateHHmm = (date: any) => (date ? dayjs(date).format(HHmm) : null);

export function convertToIsoString(date?: string | number | Date | Dayjs) {
  if (!date) return null;
  return dayjs(date).toISOString();
}

// export function convertToIsoStringUTC(date?: string | number | Date | Dayjs) {
//   if (!date) return null;
//   return dayjs(date).utc(true).toISOString();
// }
