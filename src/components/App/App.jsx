import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../Friends/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import data from '../../Data/data.json';
import user from '../../Data/user.json';
import friends from '../../Data/friends.json';
import transaction from '../../Data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
export default App;