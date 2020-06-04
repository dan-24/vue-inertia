<template>
    <section class="dashboard">
        <div class="row">
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card card-statistics">
                    <div class="card-body">
                        <div class="d-flex justify-content-between flex-wrap">
                            <div>
                                <i class="mdi mdi-cube text-danger icon-lg"></i>
                            </div>
                            <div>
                                <p class="card-text text-right">
                                    Total Revenue
                                </p>
                                <div class="fluid-container">
                                    <h3
                                        class="card-title font-weight-bold text-right mb-0"
                                    >
                                        $65,650
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <p class="text-muted mt-3">
                            <i
                                class="mdi mdi-alert-octagon mr-1"
                                aria-hidden="true"
                            ></i>
                            65% lower growth
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- table -->
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Order</h5>
                        <div class="table-responsive">
                            <table class="table center-aligned-table">
                                <thead>
                                    <tr>
                                        <th class="border-bottom-0">
                                            Order No
                                        </th>
                                        <th class="border-bottom-0">
                                            Product Name
                                        </th>
                                        <th class="border-bottom-0">
                                            Purchased On
                                        </th>
                                        <th class="border-bottom-0">
                                            Shipping Status
                                        </th>
                                        <th class="border-bottom-0">
                                            Payment Method
                                        </th>
                                        <th class="border-bottom-0">
                                            Payment Status
                                        </th>
                                        <th class="border-bottom-0"></th>
                                        <th class="border-bottom-0"></th>
                                        <th class="border-bottom-0"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>034</td>
                                        <td>Iphone 7</td>
                                        <td>12 May 2017</td>
                                        <td>Dispatched</td>
                                        <td>Credit card</td>
                                        <td>
                                            <label class="badge badge-teal"
                                                >Approved</label
                                            >
                                        </td>
                                        <td>
                                            <a
                                                href="#"
                                                class="btn btn-outline-success btn-sm"
                                                >View Order</a
                                            >
                                        </td>
                                        <td>
                                            <a
                                                href="#"
                                                class="btn btn-outline-danger btn-sm"
                                                >Cancel</a
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
