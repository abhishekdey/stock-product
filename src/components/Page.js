import React from 'react';
import { Link } from "Link";
import { Avatar } from "Avatar";
import { PageLayout } from "Avatar";

export default function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}