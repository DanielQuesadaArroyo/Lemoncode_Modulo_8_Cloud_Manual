import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface BasicPaginationProps {
  totalPages: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const BasicPagination: React.FunctionComponent<BasicPaginationProps> = (
  props,
) => {
  const { totalPages, page, onChange } = props;

  return (
    <Stack spacing={2} alignItems="center" sx={{ my: 4 }}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={onChange}
        color="primary"
        shape="circular"
      />
    </Stack>
  );
};
