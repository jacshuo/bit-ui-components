export default interface APIAdapter {
  fetchData: () => Promise<any>;
  reloadData?: () => Promise<any>;
  success: (callback: (data: any) => void) => void;
  error: (callback: (res: any) => void) => void;
  loading: boolean;
}
