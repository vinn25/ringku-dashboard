import DefaultLayout from "@/components/layout/DefaultLayout";
import LayoutWallet from "@/components/ui/wallet/LayoutWallet";

export default function Home() {
  return (
    <div>
      <DefaultLayout
        title="My Wallet"
        description="Keep track your financial plan"
      >
        <LayoutWallet />
      </DefaultLayout>
    </div>
  );
}
